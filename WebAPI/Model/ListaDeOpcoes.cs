using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Model
{
  public class ListaDeOpcoes : IListaDeOpcoes
  {
    public List<KeyValuePair<int, string>> _ListaDeOpcoes;

    public ListaDeOpcoes()
    {
      _ListaDeOpcoes = new List<KeyValuePair<int, string>>();
      _ListaDeOpcoes.Add(new KeyValuePair<int, string>(1, "João"));
      _ListaDeOpcoes.Add(new KeyValuePair<int, string>(2, "Maria"));
      _ListaDeOpcoes.Add(new KeyValuePair<int, string>(3, "Ana"));
    }

    public string BuscaItemDaLista(int pPesquisa)
    {
      var key = (from k in _ListaDeOpcoes where k.Key == pPesquisa select k.Value).FirstOrDefault();

      if (key != null)
        return key;
      else
        return string.Empty;
    }
  }
}
