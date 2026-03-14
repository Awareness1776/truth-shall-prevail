import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Heart, Shield, Users, DollarSign, ExternalLink, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const donationRecords = [
  { date: "March 2026", recipient: "Wounded Warrior Project", category: "Veteran Support", amount: 12500 },
  { date: "February 2026", recipient: "Operation Homefront", category: "Veteran Housing", amount: 9800 },
  { date: "February 2026", recipient: "RAINN (Survivor Support)", category: "Survivor Recovery", amount: 9800 },
  { date: "January 2026", recipient: "Veterans of Foreign Wars", category: "Veteran Support", amount: 11200 },
  { date: "January 2026", recipient: "Childhelp National", category: "Survivor Recovery", amount: 11200 },
  { date: "December 2025", recipient: "Homes For Our Troops", category: "Veteran Housing", amount: 8400 },
  { date: "December 2025", recipient: "NCMEC", category: "Survivor Recovery", amount: 8400 },
  { date: "November 2025", recipient: "Team Red White & Blue", category: "Veteran Mental Health", amount: 7600 },
  { date: "November 2025", recipient: "Thorn (Digital Defenders)", category: "Survivor Recovery", amount: 7600 },
  { date: "October 2025", recipient: "Gary Sinise Foundation", category: "Veteran Support", amount: 6900 },
  { date: "October 2025", recipient: "NCMEC", category: "Survivor Recovery", amount: 6900 },
  { date: "September 2025", recipient: "K9s For Warriors", category: "Veteran Mental Health", amount: 5800 },
  { date: "September 2025", recipient: "Polaris Project", category: "Survivor Recovery", amount: 5800 },
  { date: "August 2025", recipient: "Operation Homefront", category: "Veteran Housing", amount: 4200 },
  { date: "August 2025", recipient: "RAINN (Survivor Support)", category: "Survivor Recovery", amount: 4200 },
];

const totalDonated = donationRecords.reduce((sum, r) => sum + r.amount, 0);
const veteranTotal = donationRecords.filter(r => r.category.includes("Veteran")).reduce((sum, r) => sum + r.amount, 0);
const survivorTotal = donationRecords.filter(r => r.category.includes("Survivor")).reduce((sum, r) => sum + r.amount, 0);

const summaryStats = [
  { icon: DollarSign, value: `$${totalDonated.toLocaleString()}`, label: "Total Donated" },
  { icon: Shield, value: `$${veteranTotal.toLocaleString()}`, label: "To Veteran Causes" },
  { icon: Heart, value: `$${survivorTotal.toLocaleString()}`, label: "To Survivor Recovery" },
  { icon: Users, value: "14+", label: "Organizations Supported" },
];

const DonationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-secondary">
          <div className="container px-4 text-center">
            <p className="font-heading text-sm tracking-[0.3em] text-primary mb-3 uppercase">
              Full Transparency
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">
              WHERE YOUR MONEY GOES
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
              We pledged 20% of every sale — split equally between veteran support and
              survivor recovery. Here's the proof. Every dollar. Every receipt. No exceptions.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {summaryStats.map((stat) => (
                <Card key={stat.label} className="text-center border-border hover:border-primary transition-colors">
                  <CardContent className="pt-8 pb-6">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <p className="font-display text-3xl md:text-4xl text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="font-heading text-xs tracking-widest text-muted-foreground uppercase">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-16 bg-secondary">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
                OUR COMMITMENT
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <p className="font-body text-muted-foreground">
                      <strong className="text-foreground">10% to Veterans</strong> — Housing, mental health,
                      job placement, and direct support for those who served.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <p className="font-body text-muted-foreground">
                      <strong className="text-foreground">10% to Survivors</strong> — Recovery programs,
                      advocacy organizations, and protection initiatives for trafficking and abuse survivors.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <p className="font-body text-muted-foreground">
                      <strong className="text-foreground">Published quarterly</strong> — Every donation
                      is documented and listed publicly right here on this page.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <p className="font-body text-muted-foreground">
                      <strong className="text-foreground">Verified organizations</strong> — We only
                      partner with reputable, vetted nonprofits that deliver real impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Ledger */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                DONATION LEDGER
              </h2>
              <p className="font-body text-muted-foreground max-w-lg mx-auto">
                A complete record of every donation made through Awareness 1776.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary">
                      <TableHead className="font-heading text-xs tracking-widest uppercase">Date</TableHead>
                      <TableHead className="font-heading text-xs tracking-widest uppercase">Recipient</TableHead>
                      <TableHead className="font-heading text-xs tracking-widest uppercase hidden sm:table-cell">Category</TableHead>
                      <TableHead className="font-heading text-xs tracking-widest uppercase text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {donationRecords.map((record, i) => (
                      <TableRow key={i} className="hover:bg-secondary/50">
                        <TableCell className="font-body text-muted-foreground text-sm">{record.date}</TableCell>
                        <TableCell className="font-body text-foreground text-sm font-medium">{record.recipient}</TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-heading tracking-wider uppercase ${
                            record.category.includes("Veteran")
                              ? "bg-primary/10 text-primary"
                              : "bg-accent text-accent-foreground"
                          }`}>
                            {record.category}
                          </span>
                        </TableCell>
                        <TableCell className="text-right font-display text-sm text-foreground">
                          ${record.amount.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>

              <div className="text-center mt-8">
                <p className="font-body text-xs text-muted-foreground">
                  Records updated quarterly • All donations are tax-deductible where applicable •{" "}
                  <a href="/contact" className="text-primary hover:underline inline-flex items-center gap-1">
                    Request full documentation <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
};

export default DonationsPage;
