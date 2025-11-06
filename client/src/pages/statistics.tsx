import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { sheinStatistics, environmentalFacts } from "@/data/statistics";
import { TrendingUp, Users, DollarSign, Droplets, Flame, Trash2, Waves } from "lucide-react";

export default function Statistics() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Badge className="mb-4" data-testid="badge-data">
            Data & Statistics
          </Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            The Numbers Behind Fast Fashion
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Comprehensive data analysis of Shein's rapid growth and its impact on workers and the environment.
            All statistics are sourced from industry reports and company disclosures.
          </p>
        </div>

        {/* Shein Growth Statistics */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Shein's Explosive Growth (2021-2023)</h2>
          
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Annual Users Chart */}
            <Card data-testid="card-users-chart">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <CardTitle>Annual Users</CardTitle>
                </div>
                <CardDescription>Number of annual users in millions</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={sheinStatistics.annualUsers}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="year" 
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <YAxis 
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      label={{ value: 'Users (millions)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '0.5rem'
                      }}
                      formatter={(value: number) => [`${value}M users`, 'Annual Users']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="users" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', r: 6 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 rounded-lg bg-muted/50 p-4">
                  <p className="text-sm font-medium">Key Insight</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="font-semibold text-destructive">103% growth</span> from 43.7M to 88.8M users in just 2 years
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Employee-to-Customer Ratio */}
            <Card data-testid="card-ratio-chart">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-destructive" />
                  <CardTitle>Employee-to-Customer Ratio</CardTitle>
                </div>
                <CardDescription>Customers served per employee</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sheinStatistics.employeeRatios}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="year"
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <YAxis 
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      label={{ value: 'Customers per Employee', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '0.5rem'
                      }}
                      formatter={(value: number, name: string, props: any) => [
                        `1:${value.toLocaleString()}`,
                        'Ratio'
                      ]}
                    />
                    <Bar dataKey="ratio" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 rounded-lg bg-destructive/10 p-4">
                  <p className="text-sm font-medium text-destructive">Critical Finding</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Each employee now serves <span className="font-semibold text-foreground">8,073 customers</span>, up 85% from 2021
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Employee Salary Chart */}
            <Card data-testid="card-salary-chart">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-accent" />
                  <CardTitle>Employee Salary</CardTitle>
                </div>
                <CardDescription>Average annual salary in USD</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sheinStatistics.salaryData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      type="number"
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <YAxis 
                      type="category"
                      dataKey="year"
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '0.5rem'
                      }}
                      formatter={(value: number) => [`$${value.toLocaleString()} USD`, 'Salary']}
                    />
                    <Bar dataKey="salary" fill="hsl(var(--accent))" radius={[0, 8, 8, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 rounded-lg bg-muted/50 p-4">
                  <p className="text-sm font-medium">Context</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    While salaries increased 146%, they remain <span className="font-semibold text-foreground">below living wage standards</span> in most regions
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Employee Count */}
            <Card data-testid="card-employees-chart">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle>Total Employees</CardTitle>
                </div>
                <CardDescription>Number of Shein employees by year</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={sheinStatistics.employeeCount}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="year"
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <YAxis 
                      className="text-xs"
                      tick={{ fill: 'hsl(var(--muted-foreground))' }}
                      label={{ value: 'Employees', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '0.5rem'
                      }}
                      formatter={(value: number) => [`${value.toLocaleString()} employees`, 'Total Employees']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="employees" 
                      stroke="hsl(var(--chart-1))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--chart-1))', r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 rounded-lg bg-muted/50 p-4">
                  <p className="text-sm font-medium">Disparity</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Only <span className="font-semibold text-foreground">10% employee growth</span> despite 103% user growth
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Environmental Impact */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold">Environmental Impact</h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {environmentalFacts.map((fact, index) => {
              const icons = [Flame, Droplets, Trash2, Waves];
              const Icon = icons[index];
              const colors = ["text-destructive", "text-blue-500", "text-amber-600", "text-cyan-600"];
              const bgColors = ["bg-destructive/10", "bg-blue-500/10", "bg-amber-600/10", "bg-cyan-600/10"];
              
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-environmental-${index}`}>
                  <CardHeader>
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${bgColors[index]}`}>
                      <Icon className={`h-6 w-6 ${colors[index]}`} />
                    </div>
                    <CardTitle className="font-mono text-2xl">{fact.stat}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{fact.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Data Sources */}
        <Card className="mt-12 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-lg">Data Sources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Shein company reports and public disclosures (2021-2023)</p>
            <p>• United Nations Environment Programme (UNEP) - Fashion Industry Impact Report</p>
            <p>• Ellen MacArthur Foundation - Circular Economy in Fashion</p>
            <p>• Fashion Revolution - Fashion Transparency Index</p>
            <p>• International Labour Organization (ILO) - Garment Worker Statistics</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
