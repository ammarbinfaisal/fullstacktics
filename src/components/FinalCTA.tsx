import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Cal from '@/app/Cal';

export default function FinalCTA() {
  return (
    <section className="container relative mx-auto py-24 bg-[#F5F5F5]">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-[#4B5E6A]">
          Ready to Supercharge Your Systems?
        </h2>
        <p className="text-lg text-[#4B5E6A] mb-8">
          Schedule a free technical consultation to explore how AI and full-stack innovation can drive your business forward.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Cal>
            <Button
              size="lg"
              className="text-base gap-2 bg-gradient-to-r from-[#4A919E] to-teal-600 hover:from-[#3A7A85] hover:to-teal-700 text-white"
            >
              Schedule Technical Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Cal>
          <Button
            size="lg"
            variant="outline"
            className="text-base gap-2 text-[#4A919E] border-[#4A919E] hover:bg-[#4A919E]/10"
          >
            View Case Studies
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-sm text-[#4B5E6A] mt-8">
          Join 50+ innovators leveraging our AI-driven solutions for unmatched performance.
        </p>
      </div>
    </section>
  );
}