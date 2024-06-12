
const listaProfissoes = [
    { title: 'Administração', slug: 'administracao' },
    { title: 'Administração Pública', slug: 'administracao-publica' },
    { title: 'Análise e Desenvolvimento de Sistemas', slug: 'analise-e-desenvolvimento-de-sistemas' },
    { title: 'Arquitetura e Urbanismo', slug: 'arquitetura-e-urbanismo' },
    { title: 'Artes Visuais', slug: 'artes-visuais' },
    { title: 'Automação Industrial  ', slug: 'automacao-industrial' },
    { title: 'Banco de Dados', slug: 'banco-de-dados' },
    { title: 'Biomedicina', slug: 'biomedicina' },
    { title: 'Ciência de Dados', slug: 'ciencia-de-dados' },
    { title: 'Ciências Aeronáuticas', slug: 'ciencias-aeronauticas' },
    { title: 'Ciências Biológicas', slug: 'ciencias-biologicas' },
    { title: 'Ciências Contábeis', slug: 'ciencias-contabeis' },
    { title: 'Ciências da Computação', slug: 'ciencias-da-computacao' },
    { title: 'Ciências Econômicas', slug: 'ciencias-economicas' },
    { title: 'Ciências Exatas', slug: 'ciencias-exatas' },
    { title: 'Ciências Humanas', slug: 'ciencias-humanas' },
    { title: 'Cinema', slug: 'cinema' },
    { title: 'Comércio Exterior', slug: 'comercio-exterior' },
    { title: 'Comunicação Institucional', slug: 'comunicacao-institucional' },
    { title: 'Cozinha Contemporânea ', slug: 'cozinha-contemporanea' },
    { title: 'Defesa Cibernética', slug: 'defesa-cibernetica' },
    { title: 'Design', slug: 'design' },
    { title: 'Design de Interiores', slug: 'design-de-interiores' },
    { title: 'Design de Moda', slug: 'design-de-moda' },
    { title: 'Design Gráfico', slug: 'design-grafico' },
    { title: 'Direito', slug: 'direito' },
    { title: 'Educação Física', slug: 'educacao-fisica' },
    { title: 'Enfermagem', slug: 'enfermagem' },
    { title: 'Engenharia Ambiental e Sanitária', slug: 'engenharia-ambiental-e-sanitaria' },
    { title: 'Engenharia Civil', slug: 'engenharia-civil' },
    { title: 'Engenharia da Computação', slug: 'engenharia-da-computacao' },
    { title: 'Engenharia de Controle e Automação', slug: 'engenharia-de-controle-e-automacao' },
    { title: 'Engenharia de Petróleo', slug: 'engenharia-de-petroleo' },
    { title: 'Engenharia de Produção', slug: 'engenharia-de-producao' },
    { title: 'Engenharia de Telecomunicações', slug: 'engenharia-de-telecomunicacoes' },
    { title: 'Engenharia Elétrica', slug: 'engenharia-eletrica' },
    { title: 'Engenharia Mecânica', slug: 'engenharia-mecanica' },
    { title: 'Engenharia Química', slug: 'engenharia-quimica' },
    { title: 'Estética', slug: 'estetica' },
    { title: 'Estética e Cosmética', slug: 'estetica-e-cosmetica' },
    { title: 'Eventos', slug: 'eventos' },
    { title: 'Farmácia', slug: 'farmacia' },
    { title: 'Filosofia', slug: 'filosofia' },
    { title: 'Física', slug: 'fisica' },
    { title: 'Fisioterapia', slug: 'fisioterapia' },
    { title: 'Formação pedagógica', slug: 'formacao-pedagogica' },
    { title: 'Fotografia', slug: 'fotografia' },
    { title: 'Gastronomia', slug: 'gastronomia' },
    { title: 'Geografia', slug: 'geografia' },
    { title: 'Gerontologia - Bem Estar e Educação', slug: 'gerontologia-bem-estar-e-educacao' },
    { title: 'Gestão Ambiental', slug: 'gestao-ambiental' },
    { title: 'Gestão Comercial', slug: 'gestao-comercial' },
    { title: 'Gestão da Qualidade', slug: 'gestao-da-qualidade' },
    { title: 'Gestão da Tecnologia da Informação', slug: 'gestao-da-tecnologia-da-informacao' },
    { title: 'Gestão de Recursos Humanos', slug: 'gestao-de-recursos-humanos' },
    { title: 'Gestão Financeira', slug: 'gestao-financeira' },
    { title: 'Gestão Hospitalar', slug: 'gestao-hospitalar' },
    { title: 'Gestão Pública', slug: 'gestao-publica' },
    { title: 'Gestão de Segurança Privada', slug: 'gestao-de-seguranca-privada' },
    { title: 'História', slug: 'historia' },
    { title: 'Investigação Forense e Perícia Criminal', slug: 'investigacao-forense-e-pericia-criminal' },
    { title: 'Jogos Digitais', slug: 'jogos-digitais' },
    { title: 'Jornalismo', slug: 'jornalismo' },
    { title: 'Letras - Espanhol', slug: 'letras-espanhol' },
    { title: 'Letras - Inglês', slug: 'letras-ingles' },
    { title: 'Letras - Língua Portuguesa', slug: 'letras-lingua-portuguesa' },
    { title: 'Logística', slug: 'logistica' },
    { title: 'Manutenção Industrial', slug: 'manutencao-industrial' },
    { title: 'Marketing', slug: 'marketing' },
    { title: 'Marketing Digital', slug: 'marketing-digital' },
    { title: 'Matemática', slug: 'matematica' },
    { title: 'Mediação', slug: 'mediacao' },
    { title: 'Medicina Veterinária', slug: 'medicina-veterinaria' },
    { title: 'Negócios Imobiliários', slug: 'negocios-imobiliarios' },
    { title: 'Nutrição', slug: 'nutricao' },
    { title: 'Odontologia', slug: 'odontologia' },
    { title: 'Pedagogia', slug: 'pedagogia' },
    { title: 'Petróleo e Gás', slug: 'petroleo-e-gas' },
    { title: 'Processos Escolares', slug: 'processos-escolares' },
    { title: 'Processos Gerenciais', slug: 'processos-gerenciais' },
    { title: 'Produção Audiovisual', slug: 'producao-audiovisual' },
    { title: 'Produção Fonográfica', slug: 'producao-fonografica' },
    { title: 'Psicologia', slug: 'psicologia' },
    { title: 'Publicidade e Propaganda', slug: 'publicidade-e-propaganda' },
    { title: 'Química', slug: 'quimica' },
    { title: 'Radiologia', slug: 'radiologia' },
    { title: 'Redes de Computadores', slug: 'redes-de-computadores' },
    { title: 'Redes de Telecomunicações', slug: 'redes-de-telecomunicacoes' },
    { title: 'Relações Internacionais', slug: 'relacoes-internacionais' },
    { title: 'Secretariado Executivo', slug: 'secretariado-executivo' },
    { title: 'Segurança Pública', slug: 'seguranca-publica' },
    { title: 'Serviço Social', slug: 'servico-social' },
    { title: 'Sistemas de Informação', slug: 'sistemas-de-informacao' },
    { title: 'Sistemas para Internet', slug: 'sistemas-para-internet' },
    { title: 'Sociologia', slug: 'sociologia' },
    { title: 'Teatro', slug: 'teatro' },
    { title: 'Teologia', slug: 'teologia' },
    { title: 'Turismo', slug: 'turismo' },
];

export default function Page() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
                {listaProfissoes.map((singleProfissao) => (
                    <div key={singleProfissao.slug} className="text-blue-500 bg-gray-100 rounded-lg p-3 text-center text-xs sm:text-base">{singleProfissao.title}</div>
                ))}
            </div>
        </>
    )
}