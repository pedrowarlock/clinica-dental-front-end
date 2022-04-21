import RouterDate from './RoutersDate'


import HomeIcon from '@mui/icons-material/Home';
import BadgeIcon from '@mui/icons-material/Badge';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PaymentsIcon from '@mui/icons-material/Payments';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';


const SubMenuRegister = [
    {
        title: "Ordem de Serviço (OS)",
        link: '/ordemdeservico'
    },
    {
        title: "Funcionários",
        link: '/funcionarios'
    },
    {
        title: "Fornecedores",
        link: '/fornecedores'
    },
    {
        title: "Patrimônio",
        link: '/patrimonio'
    },
    {
        title: "Controle de estoque",
        link: '/controledeestoque'
    },
    {
        title: "Laboratório",
        link: '/laboratorio'
    },
    {
        title: "Convênio / Planos",
        link: '/convenioplanos'
    },
    {
        title: "Tabela de Honorários",
        link: '/tabelahonorarios'
    }
]

const SubMenuFinancial = [
    {
        title: "Contas a Pagar",
        link: '/contasapagar'
    },
    {
        title: "Contas a Receber",
        link: '/contasreceber'
    },
    {
        title: "Fluxo de caixa",
        link: '/fluxodecaixa'
    },
    {
        title: "Comissão dos dentistas",
        link: '/comissaodosdentistas'
    },
    {
        title: "Controle de Cheques",
        link: '/controledecheques'
    },
    {
        title: "Pagamentos",
        link: '/pagamentos'
    }
]

const SubMenuReports = [
    {
        title: "Ganho por Dentista",
        link: '/ganhopordentista'
    },
    {
        title: "Financeiro",
        link: '/financeiro'
    },
    {
        title: "Comissão",
        link: '/comissao'
    }
]

const SubMenuPaymants = [
    {
        title: "Efetuar Pagamento",
        link: '/efetuarpagamento'
    }
]

const SubMenuUtilities = [
    {
        title: "Manuais e Códigos",
        link: '/manuaisecodigos'
    },
    {
        title: "Contatos Úteis",
        link: '/contatouteis'
    }
]

export const SidebarDate = [
    {
        title: "Início",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Dentistas",
        icon: <BadgeIcon />,
        link: "/dentistas"
    },
    {
        title: "Pacientes",
        icon: <MedicalInformationIcon />,
        link: "/pacientes"
    },
    {
        title: "Agenda",
        icon: <ContactPhoneIcon />,
        link: "/agenda"
    },
    {
        title: "Cadastros",
        icon: <GroupAddIcon />,
        link: "/cadastros",
        subMenu: SubMenuRegister

    },
    {
        title: "Financeiro",
        icon: <CurrencyExchangeIcon />,
        link: "/financeiro",
        subMenu: SubMenuFinancial
    },
    {
        title: "Relatórios",
        icon: <AssessmentIcon />,
        link: "/relatorios",
        subMenu: SubMenuReports
    },
    {
        title: "Pagamentos",
        icon: <PaymentsIcon />,
        link: "/pagamentos",
        subMenu: SubMenuPaymants
    },
    {
        title: "Utilitários",
        icon: <HelpIcon />,
        link: "/utilitarios",
        subMenu: SubMenuUtilities
    }
]

