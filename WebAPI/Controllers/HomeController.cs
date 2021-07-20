using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;

using WebAPI.Model;

namespace WebAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [EnableCors(origins: "http://localhost:39903", headers: "*", methods: "*")]
  public class HomeController : Controller
  {
    [HttpPost]
    [Route("CalculaEmprestimo")]
    public async Task<IActionResult> CalculaEmprestimo(EmprestimoModel pEmpModel)
    {
      try
      {
        var pParcelas = int.Parse(pEmpModel.Parcelas);
        var pValor = Decimal.Parse(pEmpModel.ValorParcelas.Replace('.',','), NumberStyles.AllowExponent | NumberStyles.AllowDecimalPoint);

        Emprestimo emprestimo = new Emprestimo(pParcelas, pValor);
        var emp = emprestimo.CalculaEmprestimo();

        pEmpModel.ValorEmprestimo = emp.ToString();
        if (emp == null || emp == Decimal.Zero || emp < 0)
          return BadRequest();
        else
          return Ok(pEmpModel);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
      
    }

    [HttpGet]
    [Route("Pesquisar")]
    public async Task<IActionResult> Pesquisar(string pValorPesquisa)
    {
      var valorPesquisa = int.Parse(pValorPesquisa);
      ListaDeOpcoes listaDeOpcoes = new ListaDeOpcoes();
      var result = listaDeOpcoes.BuscaItemDaLista(valorPesquisa);

      if (result == string.Empty)
        return NotFound();
      else
        return Ok(new Pesquisa() { nome = result});
    }
  }
}
