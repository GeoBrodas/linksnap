import Avatar from 'boring-avatars';

function FallBackImage() {
  return (
    // <Image

    //     onError={
    //         (e) => {
    //             e.target.src = "/images/fallback.png"
    //         }
    //     }
    // />

    <Avatar
      size={40}
      name="Amelia Earhart"
      variant="marble"
      colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
    />
  );
}

export default FallBackImage;
