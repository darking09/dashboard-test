import {Button} from '@nextui-org/button';
export default function Home() {
  return (
    <div className="background">
      <h1 className="text-4xl font-bold text-center">
        Welcome to{' '}
        <a className="text-blue-600" href="https://nextjs.org">
          Next.js!
        </a>
        <br />
        <Button className='bg-new_orange'>Click me</Button>
      </h1>
    </div>
  )
}
