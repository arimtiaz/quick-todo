import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Nav from "../todos/nav";
export default function TodoDetails() {
  return (
    <div>
        <Nav/>
        <div className="max-w-6xl mx-auto">
        <Card>
      <CardHeader>
        <CardTitle>First Todo</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          This is the description of the first todo. It provides more details
          about what needs to be done.
        </p>
        <div className="flex items-center space-x-2 mb-4">
          <EnvelopeClosedIcon className="h-5 w-5 text-gray-400" />
          <span>3 users enrolled</span>
        </div>
        <form className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input type="email" placeholder="Enter your email to enroll" />
            <Button type="submit">Enroll</Button>
          </div>
        </form>
      </CardContent>
    </Card>
    </div>
    </div>
  );
}
