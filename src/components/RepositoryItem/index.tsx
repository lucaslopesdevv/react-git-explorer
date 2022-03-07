import "../../styles/RepositoryItem.scss";

interface RespositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}
export function RepositoryItem(props: RespositoryItemProps) {
  return (
    <li className="container-repo">
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}
