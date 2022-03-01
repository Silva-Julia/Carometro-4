using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace nota10.webApi.Utils
{
    public static class ImagemParaBase64
    {
            public static string TransFormarImagemBase64(IFormFile imagem)
        {
            using (var ms = new System.IO.MemoryStream())
            {
                //copia a imagem para a memoria
                imagem.CopyTo(ms);

                //devolvendo imagem em base64
                return Convert.ToBase64String(ms.ToArray());
            }
        }
    }
}
