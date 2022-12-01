import packageInfo from '../../../../../package.json';
import { VersionWrapper } from './Version.styled';

export default function Version(){
  return(
    <VersionWrapper>Versão {packageInfo.version}</VersionWrapper>
  );
}