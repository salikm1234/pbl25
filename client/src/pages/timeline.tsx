import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTimelineEvents } from "@/lib/api";
import { Clock, AlertTriangle, Loader2 } from "lucide-react";

export default function Timeline() {
  const { data: timelineEvents, isLoading } = useQuery({
    queryKey: ["/api/timeline"],
    queryFn: getTimelineEvents,
  });

  if (isLoading || !timelineEvents) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading timeline...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Badge className="mb-4" data-testid="badge-timeline">
            Learning Utility #3
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Fast Fashion Timeline
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Explore the evolution of fast fashion from the 1990s to today, understanding how the industry
            transformed and the consequences of unchecked growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line (hidden on mobile) */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:block"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className="relative"
                data-testid={`timeline-event-${index}`}
              >
                {/* Timeline node (hidden on mobile) */}
                <div className="absolute left-8 top-8 hidden -ml-2 h-4 w-4 rounded-full border-4 border-background bg-primary md:block"></div>

                {/* Content */}
                <div className="md:ml-20">
                  <Card className="hover-elevate">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="outline" className="gap-1.5 px-3 py-1 font-mono text-base">
                          <Clock className="h-4 w-4" />
                          {event.year}
                        </Badge>
                        {[2013, 2018, 2020, 2023].includes(event.year) && (
                          <Badge variant="destructive" className="gap-1.5">
                            <AlertTriangle className="h-3 w-3" />
                            Critical Event
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-lg border-l-4 border-l-destructive bg-destructive/5 p-4">
                        <p className="text-sm font-medium text-destructive mb-1">Impact</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {event.impact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* End marker */}
          <div className="relative mt-8">
            <div className="absolute left-8 hidden -ml-3 h-6 w-6 rounded-full border-4 border-background bg-accent md:block"></div>
            <div className="md:ml-20">
              <Card className="border-l-4 border-l-accent bg-accent/5">
                <CardContent className="py-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <p className="font-semibold text-accent mb-1">Present Day</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        The fight against fast fashion continues. Through education, policy advocacy,
                        and conscious consumer choices, we can work toward a more sustainable and equitable
                        fashion industry. Your understanding of these issues is the first step toward change.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <Card className="mt-12 bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle>Key Insights from the Timeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex gap-3">
              <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
              <p className="leading-relaxed">
                <strong>Acceleration:</strong> Production cycles have shrunk from months to weeks to days,
                prioritizing speed over sustainability and worker welfare.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
              <p className="leading-relaxed">
                <strong>Human Cost:</strong> Events like the Rana Plaza collapse revealed the deadly
                consequences of prioritizing profit over worker safety.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
              <p className="leading-relaxed">
                <strong>Environmental Impact:</strong> The industry's climate footprint has grown to
                rival international aviation and shipping combined.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
              <p className="leading-relaxed">
                <strong>Regulatory Response:</strong> Only recently have governments begun proposing
                binding regulations to address these systemic issues.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
