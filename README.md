# Método Glow Up — landing page afiliada

Implementação estática original, modelada a partir da estrutura pública indexada da página de vendas; **não é um clone exato do código-fonte**. O HTML, CSS e JavaScript foram escritos para este pacote.

## Link de checkout

`https://pay.cakto.com.br/e3id8y9_828193?affiliate=Sag73ioz`

Todos os botões de compra têm atributo `data-cta` e recebem UTMs automaticamente por `script.js`, preservando `affiliate=Sag73ioz`. Link informativo para a página original aparece no rodapé.

## Como usar no Netlify

Faça upload da pasta descompactada no Netlify Drop (`https://app.netlify.com/drop`) ou conecte um repositório GitHub que contenha estes arquivos na raiz. Diretório de publicação: `.`. Não há build nem dependências.

## Antes da publicação

1. Confirmar que a licença do projeto permite a utilização de nomes, imagens e textos do produto em uma página hospedada por afiliado.
2. Testar o checkout e o rastreamento/atribuição da venda com a conta afiliada.
3. Verificar preço, políticas, garantia e escopo da oferta antes de publicar.
4. Aprovar a arte de Ygor usada no site (arte derivada das imagens produzidas na conversa, não asset original comprovado).
5. Revisar a seção do Ygor e todos os termos comerciais com o titular da oferta.

**Limitação:** a página original não pôde ser inspecionada em seu HTML/DOM completo; por isso não há replicação de vídeo, pixel, scripts de quiz originais, depoimentos, garantias ou checkout incorporado.
