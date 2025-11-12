import React, { useEffect, useState } from 'react';
import { useConversation } from '@elevenlabs/react';
import { Phone, Mic, MicOff, PhoneOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const VoiceAgentPage: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID;

  const conversation = useConversation({
    agentId: agentId || '',
    onConnect: () => {
      setError(null);
    },
    onDisconnect: () => {
      setIsMuted(false);
    },
    onError: (err) => {
      console.error('Voice agent error:', err);
      setError('Connection failed. Please try again.');
    },
    onMessage: (message) => {
      console.log('Message:', message);
    },
  });

  useEffect(() => {
    if (!agentId) {
      setError('Voice agent configuration is missing. Please contact support.');
    }
  }, [agentId]);

  const isConnected = conversation.status === 'connected';
  const isConnecting = conversation.status === 'connecting';

  const handleConnect = async () => {
    setError(null);
    try {
      await conversation.startSession({
        agentId: agentId || '',
        connectionType: 'webrtc',
      });
    } catch (err) {
      console.error('Failed to start session:', err);
      setError('Failed to connect. Please try again.');
    }
  };

  const handleDisconnect = async () => {
    try {
      await conversation.endSession();
    } catch (err) {
      console.error('Failed to end session:', err);
    }
    setIsMuted(false);
  };

  const toggleMute = () => {
    // Note: Mute/unmute functionality may need to be implemented differently
    // depending on the actual API. This is a placeholder.
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Voice Assistant
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Speak directly with our AI assistant to book or manage your appointments, get any relavent information about the clinic,
              and have all your questions answered instantly.
            </p>
          </div>

          {/* Voice Interface Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col items-center">
              {/* Status Indicator */}
              <div className="mb-8">
                <div className={`relative w-32 h-32 rounded-full flex items-center justify-center ${
                  isConnected ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  isConnecting ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                  'bg-gradient-to-br from-purple-400 to-pink-500'
                }`}>
                  {isConnecting ? (
                    <Loader2 className="w-16 h-16 text-white animate-spin" />
                  ) : isConnected ? (
                    <Phone className="w-16 h-16 text-white" />
                  ) : (
                    <PhoneOff className="w-16 h-16 text-white" />
                  )}
                  {isConnected && (
                    <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-25"></div>
                  )}
                </div>
              </div>

              {/* Status Text */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {isConnected ? 'Connected' : isConnecting ? 'Connecting...' : 'Ready to Connect'}
                </h2>
                <p className="text-gray-600">
                  {isConnected ?
                    'You can now speak with our AI assistant' :
                    'Click the button below to start your consultation'
                  }
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="w-full mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-center">{error}</p>
                </div>
              )}

              {/* Control Buttons */}
              <div className="flex gap-4 flex-wrap justify-center">
                {!isConnected && !isConnecting && (
                  <Button
                    onClick={handleConnect}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg transform transition hover:scale-105"
                    disabled={!agentId}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Consultation
                  </Button>
                )}

                {isConnected && (
                  <>
                    <Button
                      onClick={toggleMute}
                      size="lg"
                      variant="outline"
                      className="px-6 py-6 text-lg rounded-full"
                    >
                      {isMuted ? (
                        <>
                          <MicOff className="w-5 h-5 mr-2" />
                          Unmute
                        </>
                      ) : (
                        <>
                          <Mic className="w-5 h-5 mr-2" />
                          Mute
                        </>
                      )}
                    </Button>

                    <Button
                      onClick={handleDisconnect}
                      size="lg"
                      variant="destructive"
                      className="px-6 py-6 text-lg rounded-full"
                    >
                      <PhoneOff className="w-5 h-5 mr-2" />
                      End Call
                    </Button>
                  </>
                )}

                <Button
                  onClick={() => navigate('/')}
                  size="lg"
                  variant="ghost"
                  className="px-6 py-6 text-lg rounded-full"
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Use</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">1</span>
                <span>Click "Start Consultation" to connect with our AI assistant</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">2</span>
                <span>Allow microphone access when prompted by your browser</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">3</span>
                <span>Speak naturally about your skin concerns or appointment needs</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">4</span>
                <span>The AI will help you book appointments and answer questions</span>
              </li>
            </ol>
          </div>

          {/* Features */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Availability</h4>
              <p className="text-gray-600 text-sm">
                Our AI assistant is available round the clock to help you
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Natural Conversation</h4>
              <p className="text-gray-600 text-sm">
                Speak naturally as if talking to a human receptionist
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Loader2 className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Instant Response</h4>
              <p className="text-gray-600 text-sm">
                Get immediate answers to your skincare questions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAgentPage;