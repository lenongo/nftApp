import '../styles/roadmap.css';
import '../styles/App.css';
import Girl from '../public/girl1mono.jpg';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function Roadmap() {
  const { ref, inView } = useInView({
    // オプション
<<<<<<< HEAD
    rootMargin: '100px', // ref要素が現れてから50px過ぎたら
=======
    rootMargin: '150px', // ref要素が現れてから50px過ぎたら
>>>>>>> 19c1fd5ef206c502c68d3922f988a23015016e6f
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div className='roadmap-wraper'>
<<<<<<< HEAD
      <div className='roadmap-container fadeUp' id='roadmap-container'>
        <div ref={ref}>
          {inView && (
            <div
              className="roadmap-content"
            >
              <h1 className='content1'>Roadmap</h1>
              <h2 className='container 0%'>
                <div className='content-wrapper'>
                  <p className="Q2">
                    0%: We create NFT for PfP such as right image.
                  </p>
                  <p className="Q2">
                    0%: 右の画像のようなプロフィール向けのNFTを作ります。
                  </p>
                  <p className="Q3">
                    25%: We create short cartoon and Live2D contents.
                  </p>
                  <p className="Q2">
                    25%: 短い漫画とLive2Dコンテンツを作成いたします。
                  </p>
                  <p className="Q4">
                    100%: Finally, we'll make IP content. 
                  </p>
                  <p className="Q2">
                    100%: 最終的に、私たちはIPコンテンツを作ります。
                  </p>
                </div>
                <img className='pfpgirl' src={Girl} alt="Girl" />
              </h2>
            </div>
          )}
        </div>
=======
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
>>>>>>> 19c1fd5ef206c502c68d3922f988a23015016e6f
      </div>
    </div >
  )
}