import '../styles/roadmap.css';
import '../styles/App.css';
import Girl from '../public/girl7.jpg';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function Roadmap() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div className='roadmap-wraper'>
      <div className='roadmap-container fadeUp' id='roadmap-container'>
        <div ref={ref}>
          {inView && (
            <div
              className="roadmap-content"
            >
              <h1 className='content1'>Roadmap</h1>
              <h2 className='container 0%'>
                <p className="Q2">
                  2022 Q2: We create NFT for PfP such as right image. 
                </p>
                <img className='pfpgirl' src={Girl} alt="Girl"/>
              </h2>
              <h2 className='container 25%'>
                <p className="Q3">
                  2022 Q2: We create NFT for PfP such as right image. 
                </p>
                <img className='pfpgirl' src={Girl} alt="Girl"/>
              </h2>
              <h2 className='container 50%'>
                <p className="Q4">
                  2022 Q2: We create NFT for PfP such as right image. 
                </p>
                <img className='pfpgirl' src={Girl} alt="Girl"/>
              </h2>
              <h2 className='container 75%'>75</h2>
              <h2 className='container 100%'>100</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}