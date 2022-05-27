import '../styles/content.css';
import '../styles/App.css';

import React from 'react'
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function Content() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div className='content-wraper'>
      <div className='content-container fadeUp' id='content-container'>
        <div ref={ref}>
          {inView && (
            <div
              className="animate__animated fadeUp"
            >
              <h1 className='content1'>What is Odoshi</h1>
              <h2 className='content2'>
                縅を持つ少年・少女が世界の謎を解き明かすべく、妖怪と戦う
              </h2>
              <p>この世界はたくさんの文明に分かれています。</p>
              <p>すでに体現しているのは、月・雲・波の属性です。</p>
              <p>彼ら、彼女らは属性ごとにある１人のアーキテクト（クリエイター）から生み出されているのです。</p>
              <p>皆さんも今日からこの世界の一員です。</p>
              <p>さあ、皆さんで文明を発展させ、世界を作っていきましょう！</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}