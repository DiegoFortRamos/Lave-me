import { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default StyleSheet.create({
  conteudo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24,
  },
  total: {
    alignItems: 'center',
  },
  descricao: {
    fontSize: 16,
    color: cores.azulClaro,
    fontWeight: 'bold',
  },
  valor: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    color: cores.azulClaro,
  },
  botao: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
});