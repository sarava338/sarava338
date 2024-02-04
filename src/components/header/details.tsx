import Stacks from './stacks';
import { stacks } from '../../data';

export default function Details() {
  return (
    <div className='details'>
      <h1>Saravanan Lakshmanan</h1>
      <small>
        <h2>Full-Stack Javascript developer</h2>
      </small>
      <Stacks stacks={stacks} />
    </div>
  );
}
