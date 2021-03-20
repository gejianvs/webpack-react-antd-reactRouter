import React from 'react';

function About(){
  return(
    <div>
      'about'
    </div>
  )
}

function Next(){
  return(
    <div>
      'Next'
    </div>
  )
}

let router = [
    {
        path: '/about',//首页默认加载的页面
        component: About,
        exact: true //是否为严格模式
    },
    {
        path: '/next',//后面是传递的参数id
        component: Next
    },
];

export default router;