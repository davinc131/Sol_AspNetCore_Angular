using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Model
{
  public interface IListaDeOpcoes
  {
    string BuscaItemDaLista(int pPesquisa);
  }
}
