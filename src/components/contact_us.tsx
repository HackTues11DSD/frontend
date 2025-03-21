"use client";

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* -- MAIN CONTENT -- */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Page Heading */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-2">
            Get in touch with our medical experts for personalized assistance
          </p>
        </div>

        {/* Contact Form & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div>
                <Label htmlFor="message">Your message</Label>
                <Textarea id="message" placeholder="Your message" rows={4} />
              </div>
              <Button className="w-full">Send Message</Button>
            </CardContent>
          </Card>

          {/* Contact Details + Operating Hours */}
          <div className="space-y-4">
            {/* Contact Details Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="font-medium">Address:</span>
                    <span>
                      м. Къро, Boulevard 'Tsarigradsko shose' 111Г, 1784 Sofia
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-medium">Phone:</span>
                    <span>0889900603</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-medium">Email:</span>
                    <span>dsdtest385@gmail.com</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Operating Hours Card */}
            <Card>
              <CardHeader>
                <CardTitle>Operating Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-gray-700">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* -- FOOTER -- */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Top Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Footer Column 1 */}
            <div>
              <h2 className="text-xl font-bold text-green-700">HealthGuide</h2>
              <p className="text-gray-600 mt-2">
                Your trusted source for health information and guidance.
              </p>
            </div>

            {/* Footer Column 2 */}
            <div>
              <h2 className="text-lg font-semibold text-green-700">
                Quick Links
              </h2>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/symptoms">Symptoms</Link>
                </li>
                <li>
                  <Link href="/treatments">Treatments</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Footer Column 3 */}
            <div>
              <h2 className="text-lg font-semibold text-green-700">
                Resources
              </h2>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>
                  <Link href="#">Medical FAQs</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Community Forum</Link>
                </li>
                <li>
                  <Link href="#">Support</Link>
                </li>
              </ul>
            </div>

            {/* Footer Column 4 */}
            <div>
              <h2 className="text-lg font-semibold text-green-700">
                Newsletter
              </h2>
              <p className="text-gray-600 mt-2">
                Subscribe to our newsletter for health tips and updates.
              </p>
              <div className="mt-2 flex space-x-2">
                <Input placeholder="Enter your email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom Footer Text */}
          <div className="text-center text-gray-500 text-sm">
            © 2025 HealthGuide. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
