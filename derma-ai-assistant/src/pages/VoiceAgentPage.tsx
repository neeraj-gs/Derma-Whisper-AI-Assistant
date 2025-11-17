import React, { useEffect, useState } from 'react';
import { useConversation } from '@elevenlabs/react';
import { Phone, Mic, MicOff, PhoneOff, Loader2, Calendar, Clock, MessageSquare, CheckCircle, Sparkles, Headphones } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header with Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">AI-Powered Virtual Receptionist</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-green-700">24/7 AVAILABLE</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Your Virtual Receptionist
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Talk to our intelligent AI receptionist just like you would with a real person. Book appointments,
              manage your schedule, get clinic information, and have all your skincare questions answered instantly—
              <span className="font-bold text-purple-600"> anytime, day or night</span>.
            </p>
          </div>

          {/* Voice Interface Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-purple-100">
            <div className="flex flex-col items-center">
              {/* Status Indicator */}
              <div className="mb-8">
                <div className={`relative w-40 h-40 rounded-full flex items-center justify-center shadow-2xl ${
                  isConnected ? 'bg-gradient-to-br from-green-400 to-emerald-600' :
                  isConnecting ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                  'bg-gradient-to-br from-purple-500 to-pink-600'
                }`}>
                  {isConnecting ? (
                    <Loader2 className="w-20 h-20 text-white animate-spin" />
                  ) : isConnected ? (
                    <Headphones className="w-20 h-20 text-white" />
                  ) : (
                    <Phone className="w-20 h-20 text-white" />
                  )}
                  {isConnected && (
                    <>
                      <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-30"></div>
                      <div className="absolute -inset-4 rounded-full border-4 border-green-300 animate-pulse"></div>
                    </>
                  )}
                </div>
              </div>

              {/* Status Text */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {isConnected ? '🎧 Live Connection Active' : isConnecting ? '⏳ Connecting to Receptionist...' : '📞 Receptionist Ready to Assist'}
                </h2>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  {isConnected ?
                    'Your virtual receptionist is listening. Speak naturally about your needs!' :
                    'Start a conversation with our AI receptionist who can help you with appointments, information, and more'
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
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-7 text-xl rounded-full shadow-2xl transform transition hover:scale-110 hover:shadow-purple-300"
                    disabled={!agentId}
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Connect with Receptionist
                  </Button>
                )}

                {isConnected && (
                  <>
                    <Button
                      onClick={toggleMute}
                      size="lg"
                      variant="outline"
                      className="px-8 py-7 text-lg rounded-full border-2 hover:bg-gray-50"
                    >
                      {isMuted ? (
                        <>
                          <MicOff className="w-6 h-6 mr-2" />
                          Unmute
                        </>
                      ) : (
                        <>
                          <Mic className="w-6 h-6 mr-2" />
                          Mute
                        </>
                      )}
                    </Button>

                    <Button
                      onClick={handleDisconnect}
                      size="lg"
                      variant="destructive"
                      className="px-8 py-7 text-lg rounded-full shadow-lg"
                    >
                      <PhoneOff className="w-6 h-6 mr-2" />
                      End Call
                    </Button>
                  </>
                )}

                <Button
                  onClick={() => navigate('/')}
                  size="lg"
                  variant="ghost"
                  className="px-8 py-7 text-lg rounded-full hover:bg-purple-50"
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </div>

          {/* What Can Our Receptionist Do Section */}
          <div className="mt-12 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-10 shadow-2xl text-white">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-3">What Can Our AI Receptionist Do?</h3>
              <p className="text-purple-100 text-lg max-w-2xl mx-auto">
                Your virtual receptionist is trained to handle all your needs, just like speaking with our front desk staff
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">Book Appointments</h4>
                <p className="text-purple-100 text-sm">
                  Schedule new appointments, check availability, and find the perfect time slot for your visit
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">Manage Schedule</h4>
                <p className="text-purple-100 text-sm">
                  Reschedule, cancel, or modify your existing appointments with ease
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">Answer Questions</h4>
                <p className="text-purple-100 text-sm">
                  Get detailed information about treatments, pricing, insurance, and clinic policies
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">Provide Clinic Info</h4>
                <p className="text-purple-100 text-sm">
                  Learn about our services, hours, location, doctors, and what to expect during your visit
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">Skincare Guidance</h4>
                <p className="text-purple-100 text-sm">
                  Get general advice about skin concerns and which treatments might be right for you
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-xl mb-2">24/7 Availability</h4>
                <p className="text-purple-100 text-sm">
                  Call anytime, day or night—our AI receptionist never sleeps and is always ready to help
                </p>
              </div>
            </div>
          </div>

          {/* How to Use Instructions */}
          <div className="mt-12 bg-white rounded-3xl p-10 shadow-xl border-2 border-purple-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Use Your Virtual Receptionist</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">1</div>
                <h4 className="font-bold text-gray-900 mb-2">Click to Connect</h4>
                <p className="text-gray-600 text-sm">Press the button above to start talking with our AI receptionist</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">2</div>
                <h4 className="font-bold text-gray-900 mb-2">Allow Microphone</h4>
                <p className="text-gray-600 text-sm">Grant microphone permission when your browser prompts you</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">3</div>
                <h4 className="font-bold text-gray-900 mb-2">Speak Naturally</h4>
                <p className="text-gray-600 text-sm">Talk just like you would with a real receptionist—no special commands needed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">4</div>
                <h4 className="font-bold text-gray-900 mb-2">Get Instant Help</h4>
                <p className="text-gray-600 text-sm">Receive immediate assistance with bookings, questions, and information</p>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-md">
                <Clock className="w-9 h-9 text-white" />
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">Always Available</h4>
              <p className="text-gray-700">
                No more waiting for office hours. Get help booking appointments and answering questions at 3 AM or 3 PM—we're always here.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-md">
                <Mic className="w-9 h-9 text-white" />
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">Natural Conversation</h4>
              <p className="text-gray-700">
                No robotic menus or button pressing. Just speak naturally as if you're talking to a real person at our front desk.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border-2 border-orange-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 shadow-md">
                <Sparkles className="w-9 h-9 text-white" />
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">Instant & Accurate</h4>
              <p className="text-gray-700">
                Get immediate, accurate responses about our services, availability, treatments, and policies without any wait time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAgentPage;