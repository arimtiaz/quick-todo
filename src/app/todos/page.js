import { Button } from "@/components/ui/button";
import Nav from "./nav";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input";
import { DragHandleDots2Icon, Pencil1Icon, TrashIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import Link from "next/link";

export default function Todos() {
  const todos = [
    { id: 1, name: 'First Todo', enrolled: 3 },
    { id: 2, name: 'Second Todo', enrolled: 1 },
    { id: 3, name: 'Third Todo', enrolled: 5 },
  ]
    return (
      <div className="">
        <Nav />
        <div className="flex justify-between items-center mb-4 max-w-6xl mx-auto my-12">
          {/* Top */}
        <h2 className="text-2xl font-bold">Todo List</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Todo</Button>
            </DialogTrigger>
            <DialogContent className="bg-white ">
              <DialogHeader>
                <DialogTitle>Add New Todo</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4 ">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-left">
                    Name
                  </Label>
                  <Input id="name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-left">
                    Description
                  </Label>
                  <Textarea id="description" className="col-span-3" />
                </div>
              </div>
              <Button className="w-1/3  bottom-0 right-0">Create Todo</Button>
            </DialogContent>
          </Dialog>
      </div>
      {/* Todo LIst */}
      <div className="max-w-6xl mx-auto my-12">
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Enrolled</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell>
                  <DragHandleDots2Icon className="h-5 w-5 text-gray-400" />
                </TableCell>
                <TableCell>{todo.id}</TableCell>
                <TableCell>
                  <Link href={`/todos/${todo.id}`} className="text-blue-600 hover:underline">
                    {todo.name}
                  </Link>
                </TableCell>
                <TableCell>{todo.enrolled}</TableCell>

                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Pencil1Icon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      </div>
      </div>
    );
  }
  