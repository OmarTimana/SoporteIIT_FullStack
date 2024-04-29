import { useEffect, useState } from 'react'
import './App.css'
import { Task } from './shared/task'
import { remult } from 'remult'
import Navbar from './components/navbar/Navbar';
import { Layout } from 'antd';
import logo from '../public/vite.svg'

const { Header, Footer, Content } = Layout;

const taskRepo = remult.repo(Task)

function App() {

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    taskRepo.find().then(setTasks)
  }, [])

  return (
    <>
      <Layout>
        <Header className='flex flex-1 justify-between' style={{color:'white'}}>
          <img src={logo}/>
          <Navbar/>
        </Header>

        <Content className='h-screen'>
          <div>
          Tareas

            <main>
              {tasks.map(task => {
                return (
                  <div key={task.id}>
                    <input type="checkbox" checked={task.completed} />
                    {task.title}
                  </div>
                )
              })}
            </main>
          </div> 
        </Content>

        <Footer className='bg-slate-700'>Footer</Footer>

      </Layout>

    </>
  )
}

export default App
