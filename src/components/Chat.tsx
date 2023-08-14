'use client'

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";

export default function Chat() {
  return (
    <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>TS</AvatarFallback>
              <AvatarImage src="https://github.com/timoteostifft.png"/>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">You</span>
              What is your opinion about javascript?
            </p>
          </div>

          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>AI</AvatarFallback>
              <AvatarImage src="https://github.com/vercel-labs.png"/>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">AI</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quisquam ipsa. Obcaecati laborum esse recusandae. Voluptas recusandae culpa error soluta, nemo officiis id maxime, est, reiciendis ducimus architecto rerum vitae.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?"/>
          <Button>Send</Button>
        </CardFooter>
      </Card>
  )
}