import React from 'react';

import { Image } from "./styles";
import LoadingImg from '../../assets/images/loading.gif';

function Loading() {
  return <Image src={LoadingImg} width={50} alt="" />;
}

export default Loading;