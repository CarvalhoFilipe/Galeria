import * as C from './styles';


type Props = {
 url: string;
 name: string;
 onDelete: (name: string) => void;
}


const PhotoItem = ({ url, name, onDelete }: Props) => {

 const handleDelete = () => {



 }
 return (
  <C.Container>
   <img src={url} alt={name} />
   {name}

   <button onClick={() => onDelete(name)}>Delete</button>

  </C.Container>
 );
}

export default PhotoItem;