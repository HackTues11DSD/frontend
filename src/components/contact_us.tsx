"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactUsPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-green-100 p-6 space-y-12">
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
    </div>
  );
}
