import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Cal from '@/app/Cal';



export default function FinalCTA() {
  return (
    <section className="container py-24 bg-primary/5">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Schedule your free strategy call and discover how much you could save with intelligent automation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Cal>
            <Button size="lg" className="text-base gap-2">
              Schedule Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Cal>
          <Button size="lg" variant="outline" className="text-base gap-2">
            View Pricing
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Join 100+ businesses that have transformed their operations with our solutions
        </p>
      </div>
    </section>
  );
}