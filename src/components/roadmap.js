import '../styles/roadmap.css';
import '../styles/App.css';
import Girl from '../public/girl7.jpg';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function Roadmap() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '150px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div className='roadmap-wraper'>
      <div className='roadmap-container' id='roadmap-container'>
        <h1 className='content1 fadeUp'>Roadmap</h1>
        <h2 className='container fadeUp 0%'>
          <div ref={ref}>
            {inView && (
              <div
                className="roadmap-content"
              >
                <div className='sentence-container'>
                  <p className="sentence Q2">
                    2022 Q2: We create NFT for PfP such as right image.
                  </p>
                  <p className="sentence Q3">
                    2022 Q3: We'll create some 4-frame cartoon and Live2D contents.
                  </p>
                  <p className="sentence Q3">
                    2022 Q4: Comming Soon...
                    
                  </p>
                </div>
                <img className='pfp 1' src={Girl} alt="Girl" />

              </div>
            )}
          </div>
        </h2>
      </div>
    </div >
  )
}