import { Page } from './LoadingBar.styles';
import loadingBar from '../../images/loading-bar.gif';

function LoadingBar() {

  return (
    <Page>
      <img src={loadingBar} alt='loading' />
    </Page>
  );
}

export default LoadingBar;
