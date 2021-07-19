using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Model
{
  public class Emprestimo : ICalcularEmprestimo
  {
    public Emprestimo(int parcelas, decimal valor)
    {
      Parcelas = parcelas;
      Valor = valor;
    }

    public int Parcelas { get; set; }
    public Decimal Valor { get; set; }

    public decimal CalculaEmprestimo()
    {
      return (Valor * Parcelas) + (((Valor * Parcelas) * 5) / 100);
    }
  }
}
