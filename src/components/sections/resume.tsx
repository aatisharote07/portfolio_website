import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Resume() {
    return (
        <section id="resume" className="py-20">
            <div className="container mx-auto px-4 max-w-2xl">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="text-center sm:text-left">
                                <h4 className="text-lg font-semibold mb-1">Download Resume</h4>
                                <p className="text-sm text-muted-foreground">Get my latest resume in PDF format</p>
                            </div>
                            <Button asChild className="flex items-center gap-2">
                                <a href="/Resume.pdf" download>
                                    <Download className="h-4 w-4" />
                                    Download Resume
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
