import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RSVPModal = ({ isOpen, onClose }: RSVPModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inviteCode: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in required fields");
      return;
    }

    // Simulate form submission
    toast.success("Thank you. Your request has been received. If selected, you'll receive the Collector's Pass and next steps by email within 48 hours.");
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      inviteCode: "",
      interest: "",
    });
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-muted/20 shadow-elegant max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-card-foreground hover:text-accent transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          <h2 className="font-serif text-3xl mb-2 tracking-wide">Request Collector's Pass</h2>
          <p className="font-serif text-muted-foreground text-sm mb-8">
            We grant access to a select list each release.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-card-foreground font-serif tracking-wider uppercase text-xs mb-2 block">
                Full Name *
              </Label>
              <Input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="bg-transparent border-muted/40 text-card-foreground focus:border-accent"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-card-foreground font-serif tracking-wider uppercase text-xs mb-2 block">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border-muted/40 text-card-foreground focus:border-accent"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-card-foreground font-serif tracking-wider uppercase text-xs mb-2 block">
                Phone (Optional)
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-transparent border-muted/40 text-card-foreground focus:border-accent"
              />
            </div>

            <div>
              <Label htmlFor="inviteCode" className="text-card-foreground font-serif tracking-wider uppercase text-xs mb-2 block">
                Invite Code (Optional)
              </Label>
              <Input
                id="inviteCode"
                type="text"
                value={formData.inviteCode}
                onChange={(e) => setFormData({ ...formData, inviteCode: e.target.value })}
                className="bg-transparent border-muted/40 text-card-foreground focus:border-accent"
              />
            </div>

            <div>
              <Label htmlFor="interest" className="text-card-foreground font-serif tracking-wider uppercase text-xs mb-2 block">
                Reason for Interest (Optional)
              </Label>
              <textarea
                id="interest"
                rows={3}
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full bg-transparent border border-muted/40 text-card-foreground focus:border-accent rounded-none p-3 resize-none"
              />
            </div>

            <Button type="submit" variant="royal" size="lg" className="w-full">
              Request Collector Pass
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
