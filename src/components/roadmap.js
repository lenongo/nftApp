import '../styles/roadmap.css';
import '../styles/App.css';
import Girl from '../public/girl1mono.jpg';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function Roadmap() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '100px', // ref要素が現れてから50px過ぎたら
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
      </div>
    </div>
  )
}