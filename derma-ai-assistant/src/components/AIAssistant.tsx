import { useEffect } from 'react';
import { useConversation } from '@elevenlabs/react';

export const AIAssistant = () => {
  const conversation = useConversation({
    // Replace with your actual Eleven Labs agent ID
    agentId: import.meta.env.VITE_ELEVENLABS_AGENT_ID || 'YOUR_AGENT_ID',
    // Optional: Add authentication if needed
    // apiKey: import.meta.env.VITE_ELEVENLABS_API_KEY,
    onConnect: () => {
      console.log('Connected to AI Assistant');
    },
    onDisconnect: () => {
      console.log('Disconnected from AI Assistant');
    },
    onMessage: (message) => {
      console.log('AI Assistant message:', message);
    },
    onError: (error) => {
      console.error('AI Assistant error:', error);
    },
  });

  useEffect(() => {
    // Set up triggers for the AI assistant
    const setupTriggers = () => {
      // Header Call Us button
      const headerTrigger = document.getElementById('ai-assistant-trigger');
      const headerMobileTrigger = document.getElementById('ai-assistant-trigger-mobile');
      const heroTrigger = document.getElementById('hero-ai-assistant');

      const startConversation = () => {
        if (conversation.status === 'connected') {
          // If already connected, you might want to show a modal or handle it differently
          console.log('AI Assistant already active');
        } else {
          conversation.connect();
        }
      };

      if (headerTrigger) {
        headerTrigger.addEventListener('click', startConversation);
      }
      if (headerMobileTrigger) {
        headerMobileTrigger.addEventListener('click', startConversation);
      }
      if (heroTrigger) {
        heroTrigger.addEventListener('click', startConversation);
      }

      // Cleanup function
      return () => {
        if (headerTrigger) {
          headerTrigger.removeEventListener('click', startConversation);
        }
        if (headerMobileTrigger) {
          headerMobileTrigger.removeEventListener('click', startConversation);
        }
        if (heroTrigger) {
          heroTrigger.removeEventListener('click', startConversation);
        }
      };
    };

    const cleanup = setupTriggers();
    return cleanup;
  }, [conversation]);

  // Optional: Add a floating widget for the AI assistant
  return (
    <>
      {conversation.status === 'connected' && (
        <div className="fixed bottom-24 right-6 z-50">
          <div className="bg-white rounded-lg shadow-2xl p-4 max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">AI Assistant Active</span>
            </div>
            <p className="text-xs text-gray-500">
              Speak naturally to book appointments or ask questions about our treatments.
            </p>
            <button
              onClick={() => conversation.disconnect()}
              className="mt-3 text-xs text-red-600 hover:text-red-700 font-medium"
            >
              End Conversation
            </button>
          </div>
        </div>
      )}
    </>
  );
};