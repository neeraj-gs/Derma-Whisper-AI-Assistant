/**
 * Voice Agent Component
 * Main voice interaction interface supporting multiple providers
 */

import React, { useState, useCallback } from 'react';
import { useConversation } from '@elevenlabs/react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { DynamicIcon } from '../../utils/icons';
import { VoiceAgentConfig } from '../../types';

interface VoiceAgentProps {
  config: VoiceAgentConfig;
  variant?: 'default' | 'compact' | 'minimal';
  showCapabilities?: boolean;
  className?: string;
}

export const VoiceAgent: React.FC<VoiceAgentProps> = ({
  config,
  variant = 'default',
  showCapabilities = true,
  className,
}) => {
  const [error, setError] = useState<string | null>(null);

  // ElevenLabs conversation hook
  const conversation = useConversation({
    onConnect: () => {
      console.log('Voice agent connected');
      setError(null);
    },
    onDisconnect: () => {
      console.log('Voice agent disconnected');
    },
    onError: (err) => {
      console.error('Voice agent error:', err);
      setError('Connection failed. Please try again.');
    },
  });

  const isConnected = conversation.status === 'connected';
  const isConnecting = conversation.status === 'connecting';
  const isMuted = conversation.isMuted;

  const handleConnect = useCallback(async () => {
    try {
      setError(null);
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: config.agentId,
      });
    } catch (err) {
      console.error('Failed to connect:', err);
      setError('Microphone access required. Please allow microphone permissions.');
    }
  }, [config.agentId, conversation]);

  const handleDisconnect = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const handleToggleMute = useCallback(() => {
    if (isMuted) {
      conversation.setVolume({ volume: 1 });
    } else {
      conversation.setVolume({ volume: 0 });
    }
  }, [conversation, isMuted]);

  // Status indicator
  const StatusIndicator = () => (
    <div className="flex items-center gap-3 mb-4">
      <div
        className={cn(
          'w-3 h-3 rounded-full',
          isConnected && 'bg-green-500 animate-pulse',
          isConnecting && 'bg-yellow-500 animate-pulse',
          !isConnected && !isConnecting && 'bg-gray-400'
        )}
      />
      <span
        className={cn(
          'text-sm font-medium',
          isConnected && 'text-green-600 dark:text-green-400',
          isConnecting && 'text-yellow-600 dark:text-yellow-400',
          !isConnected && !isConnecting && 'text-gray-500 dark:text-gray-400'
        )}
      >
        {isConnected && 'Connected'}
        {isConnecting && 'Connecting...'}
        {!isConnected && !isConnecting && 'Ready to connect'}
      </span>
    </div>
  );

  // Main voice circle
  const VoiceCircle = () => (
    <div className="relative mb-8">
      {/* Outer glow ring */}
      {isConnected && (
        <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-xl animate-pulse" />
      )}

      {/* Main circle */}
      <div
        className={cn(
          'relative w-48 h-48 rounded-full flex items-center justify-center transition-all duration-500',
          isConnected && 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl shadow-green-500/50',
          isConnecting && 'bg-gradient-to-br from-yellow-500 to-orange-500 shadow-2xl shadow-yellow-500/50',
          !isConnected && !isConnecting && 'bg-gradient-to-br from-purple-600 to-pink-600 shadow-2xl shadow-purple-500/50'
        )}
      >
        {/* Inner breathing animation */}
        {isConnected && (
          <div className="absolute inset-4 rounded-full bg-white/10 animate-ping" />
        )}

        {/* Icon */}
        <DynamicIcon
          name={isConnected ? 'Headphones' : isConnecting ? 'Mic' : 'Phone'}
          className="text-white relative z-10"
          size={variant === 'compact' ? 48 : 64}
        />
      </div>
    </div>
  );

  // Compact variant
  if (variant === 'compact') {
    return (
      <div className={cn('flex flex-col items-center p-6', className)}>
        <StatusIndicator />
        <VoiceCircle />

        <div className="flex gap-3">
          {!isConnected ? (
            <Button
              onClick={handleConnect}
              isLoading={isConnecting}
              size="lg"
              rounded="full"
            >
              <DynamicIcon name="Phone" className="mr-2" size={20} />
              Connect
            </Button>
          ) : (
            <>
              <Button
                onClick={handleToggleMute}
                variant="outline"
                size="icon-lg"
                rounded="full"
              >
                <DynamicIcon name={isMuted ? 'VolumeX' : 'Volume2'} size={24} />
              </Button>
              <Button
                onClick={handleDisconnect}
                variant="destructive"
                size="lg"
                rounded="full"
              >
                <DynamicIcon name="PhoneOff" className="mr-2" size={20} />
                End Call
              </Button>
            </>
          )}
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm">
            {error}
          </div>
        )}
      </div>
    );
  }

  // Minimal variant
  if (variant === 'minimal') {
    return (
      <div className={cn('flex items-center gap-4', className)}>
        <Button
          onClick={isConnected ? handleDisconnect : handleConnect}
          isLoading={isConnecting}
          variant={isConnected ? 'destructive' : 'default'}
          rounded="full"
        >
          <DynamicIcon
            name={isConnected ? 'PhoneOff' : 'Phone'}
            className="mr-2"
            size={18}
          />
          {isConnected ? 'End Call' : 'Talk to AI'}
        </Button>
        {isConnected && (
          <Badge color="green" pulse>
            Connected
          </Badge>
        )}
      </div>
    );
  }

  // Default variant (full)
  return (
    <div
      className={cn(
        'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 md:p-12',
        className
      )}
    >
      <div className="flex flex-col items-center text-center">
        {/* Header */}
        <Badge color="purple" className="mb-6">
          <DynamicIcon name="Sparkles" size={14} className="mr-1" />
          AI-Powered {config.agentRole}
        </Badge>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Meet {config.agentName}, Your {config.agentRole}
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mb-8">
          {config.welcomeMessage}
        </p>

        {/* Status */}
        <StatusIndicator />

        {/* Voice Circle */}
        <VoiceCircle />

        {/* Controls */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {!isConnected ? (
            <Button
              onClick={handleConnect}
              isLoading={isConnecting}
              size="xl"
              rounded="full"
              className="shadow-2xl"
            >
              <DynamicIcon name="Phone" className="mr-3" size={24} />
              {isConnecting ? 'Connecting...' : `Talk to ${config.agentName}`}
            </Button>
          ) : (
            <>
              <Button
                onClick={handleToggleMute}
                variant="secondary"
                size="lg"
                rounded="full"
              >
                <DynamicIcon
                  name={isMuted ? 'VolumeX' : 'Volume2'}
                  className="mr-2"
                  size={20}
                />
                {isMuted ? 'Unmute' : 'Mute'}
              </Button>
              <Button
                onClick={handleDisconnect}
                variant="destructive"
                size="lg"
                rounded="full"
              >
                <DynamicIcon name="PhoneOff" className="mr-2" size={20} />
                End Conversation
              </Button>
            </>
          )}
        </div>

        {/* Error message */}
        {error && (
          <div className="w-full max-w-md p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm mb-8">
            <div className="flex items-center gap-2">
              <DynamicIcon name="AlertCircle" size={18} />
              {error}
            </div>
          </div>
        )}

        {/* Capabilities */}
        {showCapabilities && config.capabilities.length > 0 && (
          <div className="w-full mt-8 pt-8 border-t border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">
              What {config.agentName} Can Do
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {config.capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-left hover:bg-white/10 transition-colors"
                >
                  <DynamicIcon
                    name={capability.icon}
                    className="text-purple-400 mb-2"
                    size={24}
                  />
                  <h4 className="text-white font-medium text-sm mb-1">
                    {capability.title}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Provider wrapper for other voice providers (extendable)
interface VoiceProviderProps {
  provider: 'elevenlabs' | 'vapi' | 'retell' | 'bland' | 'custom';
  children: React.ReactNode;
}

export const VoiceProvider: React.FC<VoiceProviderProps> = ({
  provider,
  children,
}) => {
  // Currently only ElevenLabs is implemented
  // Add other providers here as needed
  if (provider === 'elevenlabs') {
    return <>{children}</>;
  }

  // Placeholder for other providers
  console.warn(`Voice provider "${provider}" is not yet implemented`);
  return <>{children}</>;
};
