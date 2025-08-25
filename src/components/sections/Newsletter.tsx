"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { FlipWords } from "../ui/flip-words";
import { WordRotate } from "../magicui/word-rotate";
import { useEffect } from "react";
import { Label } from "../ui/label";

export default function Newsletter() {

    useEffect(() => {
        // Load Mailchimp validation script
        const script = document.createElement('script');
        script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
        script.async = true;
        document.body.appendChild(script);

        // Initialize Mailchimp form validation
        const initScript = document.createElement('script');
        initScript.innerHTML = `
            (function($) {
                window.fnames = new Array(); 
                window.ftypes = new Array();
                fnames[0]='EMAIL';ftypes[0]='email';
                fnames[1]='FNAME';ftypes[1]='text';
                fnames[2]='LNAME';ftypes[2]='text';
                fnames[3]='ADDRESS';ftypes[3]='address';
                fnames[4]='PHONE';ftypes[4]='phone';
                fnames[6]='COMPANY';ftypes[6]='text';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);
        `;
        document.body.appendChild(initScript);

        return () => {
            // Cleanup scripts on unmount
            document.body.removeChild(script);
            document.body.removeChild(initScript);
        };
    }, []);

    return (
        <section className="section-with-lines md:p-6 p-2 bg-muted/20">
            <div className="overflow-hidden p-6 border rounded bg-card grid grid-cols-2 items-center gap-4">


                <div className="flex">

                    {/* Newsletter Signup Form */}
                    <div className="w-full max-w-md">
                        <div className="bg-background ">
                            <form
                                action="https://isarai.us11.list-manage.com/subscribe/post?u=cc98951d1f422cd54a41c14b4&amp;id=469e21dc51&amp;f_id=00b2dbe3f0"
                                method="post"
                                id="mc-embedded-subscribe-form"
                                name="mc-embedded-subscribe-form"
                                className="validate space-y-4"
                                target="_blank"
                            >


                                <div className="space-y-2">
                                    <Label htmlFor="mce-EMAIL" className="text-sm font-medium">
                                        E-Mail-Adresse
                                    </Label>
                                    <input
                                        type="email"
                                        name="EMAIL"
                                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                        id="mce-EMAIL"
                                        required
                                        placeholder="ihre.email@beispiel.de"
                                    />
                                </div>

                                {/* Response messages */}
                                <div id="mce-responses" className="space-y-2">
                                    <div className="response text-red-500 text-sm" id="mce-error-response" style={{ display: 'none' }}></div>
                                    <div className="response text-green-500 text-sm" id="mce-success-response" style={{ display: 'none' }}></div>
                                </div>

                                {/* Bot protection */}
                                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                                    <input
                                        type="text"
                                        name="b_cc98951d1f422cd54a41c14b4_469e21dc51"
                                        tabIndex={-1}
                                        defaultValue=""
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    name="subscribe"
                                    id="mc-embedded-subscribe"
                                    className="w-full"
                                >
                                    Abonnieren
                                </Button>
                            </form>
                        </div>
                    </div>

                </div>
                <div className="ml-auto md:mr-12">
                    <h2 className="font-semibold mb-4">Hast du auch AI-FOMO?</h2>
                    <p>Abonniere unseren Report, den wir bei ISAR AI selbst nutzen, um über die wichtigsten KI-Neuigkeiten und Erkenntnisse auf dem Laufenden zu bleiben.</p>

                </div>

            </div>
        </section>
    );
}
