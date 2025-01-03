import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { CheckCircle, Calendar, User, Mail, Video } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Validate that request comes from Cal.com
const validateReferrer = (referer: string | null) => {
  if (!referer) return false;
  
  try {
    const refererUrl = new URL(referer);
    // Add your Cal.com subdomain here
    return refererUrl.hostname.endsWith('cal.com') || 
           refererUrl.hostname === 'app.cal.com';
  } catch {
    return false;
  }
};

export default async function MeetingConfirmation({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const headersList = headers();
  const referer = headersList.get('referer');
  
  // Validate referrer
  if (!validateReferrer(referer)) {
    // You might want to customize this based on your requirements
    redirect('/unauthorized');
  }

  // Extract and sanitize parameters
  const name = searchParams.name || 'Guest';
  const email = searchParams.email || '';
  const date = searchParams.date || '';
  const time = searchParams.time || '';
  const duration = searchParams.duration || '30';
  const meetingType = searchParams.type || 'Introduction Call';
  const location = searchParams.location || 'Google Meet';

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-teal-300" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-2">
            Meeting Confirmed!
          </h1>
          <p className="text-muted-foreground">
            Your meeting has been scheduled successfully. You&apos;ll receive an email with calendar invite shortly.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Meeting Details</CardTitle>
            <CardDescription>{meetingType}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Calendar className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Date & Time</p>
                  <p className="text-sm text-muted-foreground">
                    {date} at {time} ({duration} minutes)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <User className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Attendee</p>
                  <p className="text-sm text-muted-foreground">{name}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Video className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <h3 className="font-medium mb-2">Next Steps</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">
                  • Check your email for the calendar invitation
                </li>
                <li className="text-sm text-muted-foreground">
                  • Add the meeting to your calendar
                </li>
                <li className="text-sm text-muted-foreground">
                  • Prepare any relevant materials or questions
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
