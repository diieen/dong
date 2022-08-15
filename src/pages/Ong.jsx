export function Ong(props) {
  const ong = props.data;

  return (
    <div>
        <h1>{ong.name}</h1>
        <p>Fundado em {ong.foundation}</p>
        <p>{ong.description}</p>
        <p>{ong.tel}</p>
        <a target="_blank" href={ong.site}>{ong.site}</a>
        <p>{ong.address}</p>
        <p>{ong.city} - {ong.district}</p>
    </div>
  )
}