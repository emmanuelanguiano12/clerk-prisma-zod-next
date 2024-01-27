import { prisma } from "@/libs/prismadb"
import FormTodo from "@/app/todo/components/Form.todo"
import ListTodo from "@/app/todo/components/list.todo"

import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

import { UserButton } from "@clerk/nextjs";

const TodoPage = async() => {
    const user: User | null = await currentUser();
    
    if(!user){
      return <div>Loading...</div>
    }
    
    const todos = await prisma.todo.findMany({
      where:{
        userId: user.id
      }
    })


  return (
    <div className="space-y-5">
      <nav className="pt-3">
        <UserButton afterSignOutUrl="/" />
      </nav>
        <h1 className="text-center text-3xl my-10">Todos: {user.username}</h1>
        <FormTodo />
        <ListTodo todos={todos}/>
            {/*JSON.stringify(todos, null, 2)*/}
    </div>
  )
}

export default TodoPage