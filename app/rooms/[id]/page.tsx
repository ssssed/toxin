type Props = {
  params: { id: number };
};

export default function Room({ params: { id } }: Props) {
  return <main>Room {id}</main>;
}
