import { useContext, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react'
import { AllContext } from '../../components/Value/CoinContext'
import { StatFunction, checkStat, CoinFunction } from '../../components/templateAndFunction/statCoinFunction'
import Pop from '../../components/templateAndFunction/tempPopUp'
import GIF from '../../components/asset/gif/eat.gif'
import shown from '../../components/asset/cafe/Coffee.png'

function Ngopi() {
  const { tidur, setTidur, coin, setCoin, makan, setMakan } =
    useContext(AllContext);

  //buat ganti gif berdasarkan character
  const { character, setCharacter } = useContext(AllContext);
  const [gif, setGif] = useState(GIF);
  useEffect(() => {
    console.log(character);
    if (character === 1) {
      setGif(GIF);
    }
  }, []);
  ////

  return (
    <Box onClick={() => {
          StatFunction(tidur, setTidur, 10, 0)
          StatFunction(makan, setMakan, 15, 0)
          CoinFunction(coin, setCoin, 0, 800)
        }}>
      <Pop 
        shownIMG={shown}
        image={GIF}
        name="ngopi"
        alt='Ngopi di cafe'
      />
    </Box>
  );
}

export default Ngopi;