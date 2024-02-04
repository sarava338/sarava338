import { IStack } from '../../types';

export default function Stacks({ stacks }: { stacks: IStack[] }) {
  return (
    <div className='stacks'>
      {stacks.map((stack: IStack) => (
        <img src={stack.img} alt={`${stack.name} icon`} />
      ))}
    </div>
  );
}
