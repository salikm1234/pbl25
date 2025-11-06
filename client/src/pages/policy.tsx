import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { policyData } from "@/data/statistics";
import { FileText, Target, Scale, TrendingDown, Users, Leaf, CheckCircle2 } from "lucide-react";

export default function Policy() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Badge className="mb-4" data-testid="badge-policy">
            Government Policy
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {policyData.name}
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            {policyData.description}
          </p>
        </div>

        {/* Key Information Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <Card className="hover-elevate" data-testid="card-what-it-does">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <CardTitle>What It Does</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Establishes binding legal requirements for fashion companies to disclose environmental
                and social impacts, implement sustainable practices, and ensure worker protections throughout
                their supply chains.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-who-it-affects">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle>Who It Affects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Fashion companies with annual revenues exceeding $100 million operating in the jurisdiction.
                This includes fast fashion giants like Shein, H&M, Zara, and other major retailers with
                significant market presence.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-expected-impact">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <TrendingDown className="h-6 w-6" />
              </div>
              <CardTitle>Expected Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Transform industry practices by ensuring transparency, protecting workers' rights,
                reducing environmental damage, and incentivizing sustainable business models across
                the global fashion supply chain.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Goals Section */}
        <Card className="mb-12" data-testid="card-policy-goals">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <CardTitle>Policy Goals</CardTitle>
            </div>
            <CardDescription>
              Five key objectives to transform the fashion industry
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {policyData.goals.map((goal, index) => (
                <div key={index} className="flex gap-4 rounded-lg border bg-card p-4 hover-elevate" data-testid={`goal-${index}`}>
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    {index + 1}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Implementation Details */}
        <div className="mb-12 grid gap-6 lg:grid-cols-2">
          <Card data-testid="card-implementation">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-accent" />
                <CardTitle>Implementation Framework</CardTitle>
              </div>
              <CardDescription>How the policy would be enforced</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                {policyData.implementation}
              </p>
              <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-accent"></div>
                  <div>
                    <p className="text-sm font-medium">Annual Impact Assessments</p>
                    <p className="text-xs text-muted-foreground">Required environmental and social audits</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-accent"></div>
                  <div>
                    <p className="text-sm font-medium">Public Sustainability Reports</p>
                    <p className="text-xs text-muted-foreground">Transparent disclosure of practices and impacts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-accent"></div>
                  <div>
                    <p className="text-sm font-medium">Remediation Plans</p>
                    <p className="text-xs text-muted-foreground">Corrective actions for identified violations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-accent"></div>
                  <div>
                    <p className="text-sm font-medium">Enforcement Mechanisms</p>
                    <p className="text-xs text-muted-foreground">Fines and market restrictions for non-compliance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-testid="card-long-term-impact">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                <CardTitle>Long-Term Impact</CardTitle>
              </div>
              <CardDescription>Transforming the industry</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                {policyData.impact}
              </p>
              <div className="space-y-3 rounded-lg bg-primary/5 p-4">
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Worker Benefits</p>
                  <p className="text-xs text-muted-foreground">
                    Living wages, safe conditions, reasonable hours, and labor rights protections
                    for millions of garment workers globally
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Environmental Progress</p>
                  <p className="text-xs text-muted-foreground">
                    Reduced carbon emissions, water conservation, decreased textile waste, and
                    transition to circular economy practices
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-1">Industry Transformation</p>
                  <p className="text-xs text-muted-foreground">
                    Shift from disposable fast fashion to sustainable, ethical, and transparent
                    business models prioritizing people and planet
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why This Policy Matters */}
        <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle>Why This Policy Matters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p className="leading-relaxed">
              The fast fashion industry currently operates with minimal accountability for its environmental
              and social impacts. Companies like Shein can grow users by 103% while only increasing employees
              by 10%, paying salaries well below living wages, and contributing massively to climate change
              and pollution.
            </p>
            <p className="leading-relaxed">
              Without binding regulations, market forces alone have proven insufficient to address these issues.
              The Fashion Sustainability and Social Accountability Act provides the legal framework needed to
              ensure that fashion companies cannot externalize their costs onto vulnerable workers and the environment.
            </p>
            <p className="leading-relaxed font-medium">
              This policy represents a critical step toward making the fashion industry accountable to the
              people who make its clothes and the planet we all share.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
