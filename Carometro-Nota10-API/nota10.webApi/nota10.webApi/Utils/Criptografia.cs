namespace nota10.webApi.Utils
{
    public static class Criptografia
    {
        /// <summary>
        /// Criptografa uma senha
        /// </summary>
        /// <param name="senha">senha do usuário</param>
        /// <returns>retorna a senha criptografada</returns>
        public static string GerarHash(string senha)
        {
            return BCrypt.Net.BCrypt.HashPassword(senha);
        }

        /// <summary>
        /// Verifica uma senha
        /// </summary>
        /// <param name="senhaForm">senha que vem do front</param>
        /// <param name="senhaBanco">senha que está no banco</param>
        /// <returns>se a senha é verdadeira ou não</returns>
        public static bool CompararSenha(string senhaForm, string senhaBanco)
        {
            return BCrypt.Net.BCrypt.Verify(senhaForm, senhaBanco);
        }
    }
}
