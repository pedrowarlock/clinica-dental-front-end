// import React from "react";
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

export const SidebarDate = [
    {
        title: "Início",
        icon: <HomeIcon/>,    // <HomeIcon />
        link: "/"
    },
    {
        title: "Dentistas",
        icon: <BadgeIcon/>,
        link: "/dentistas"
    },
    {
        title: "Pacientes",
        icon: <MedicalInformationIcon/>,
        link: "/pacientes"
    },
    {
        title: "Agenda",
        icon: <ContactPhoneIcon/>,
        link: "/agenda"
    },
    {
        title: "Cadastros",
        icon: <GroupAddIcon/>,
        link: "/cadastros",
        subMenu: [
            {
                title: "Ordem de Serviço (OS)",
                icon: '0',
                link: '/ordemdeservico'
            },
            {
                title: "Funcionários",
                icon: '0',
                link: '/funcionarios'
            },
            {
                title: "Fornecedores",
                icon: '0',
                link: '/fornecedores'
            },
            {
                title: "Patrimônio",
                icon: '0',
                link: '/patrimonio'
            },
            {
                title: "Controle de estoque",
                icon: '0',
                link: '/controledeestoque'
            },
            {
                title: "Laboratório",
                icon: '0',
                link: '/laboratorio'
            },
            {
                title: "Convênio / Planos",
                icon: '0',
                link: '/convenioplanos'
            },
            {
                title: "Tabela de Honorários",
                icon: '0',
                link: '/tabelahonorarios'
            }
        ]
        
    },
    {
        title: "Financeiro",
        icon: <CurrencyExchangeIcon/>,
        link: "/financeiro",
        subMenu: [
            {
                title: "Contas a Pagar",
                icon: '0',
                link: '/contasapagar'
            },
            {
                title: "Contas a Receber",
                icon: '0',
                link: '/contasreceber'
            },
            {
                title: "Fluxo de caixa",
                icon: '0',
                link: '/fluxodecaixa'
            },
            {
                title: "Comissão dos dentistas",
                icon: '0',
                link: '/comissaodosdentistas'
            },
            {
                title: "Controle de Cheques",
                icon: '0',
                link: '/controledecheques'
            },
            {
                title: "Pagamentos",
                icon: '0',
                link: '/pagamentos'
            },
            {
                title: "Contas a Receber",
                icon: '0',
                link: '/contasreceber'
            },
            {
                title: "Fluxo de caixa",
                icon: '0',
                link: '/fluxodecaixa'
            },
            {
                title: "Comissão dos dentistas",
                icon: '0',
                link: '/comissaodosdentistas'
            },
            {
                title: "Controle de Cheques",
                icon: '0',
                link: '/controledecheques'
            },
            {
                title: "Pagamentos",
                icon: '0',
                link: '/pagamentos'
            },
            {
                title: "Contas a Receber",
                icon: '0',
                link: '/contasreceber'
            },
            {
                title: "Fluxo de caixa",
                icon: '0',
                link: '/fluxodecaixa'
            },
            {
                title: "Comissão dos dentistas",
                icon: '0',
                link: '/comissaodosdentistas'
            },
            {
                title: "Controle de Cheques",
                icon: '0',
                link: '/controledecheques'
            },
            {
                title: "Pagamentos",
                icon: '0',
                link: '/pagamentos'
            },
            {
                title: "Contas a Receber",
                icon: '0',
                link: '/contasreceber'
            },
            {
                title: "Fluxo de caixa",
                icon: '0',
                link: '/fluxodecaixa'
            },
            {
                title: "Comissão dos dentistas",
                icon: '0',
                link: '/comissaodosdentistas'
            },
            {
                title: "Controle de Cheques",
                icon: '0',
                link: '/controledecheques'
            },
            {
                title: "Pagamentos",
                icon: '0',
                link: '/pagamentos'
            }
        ]
    },
    {
        title: "Relatórios",
        icon: <AssessmentIcon/>,
        link: "/relatorios",
        subMenu: [
            {
                title: "Ganho por Dentista",
                icon: '0',
                link: '/ganhopordentista'
            },
            {
                title: "Financeiro",
                icon: '0',
                link: '/financeiro'
            },
            {
                title: "Comissão",
                icon: '0',
                link: '/comissao'
            } 
        ]
    },
    {
        title: "Pagamentos",
        icon: <PaymentsIcon/>,
        link: "/pagamentos",
        subMenu: [
            {
                title: "Efetuar Pagamento",
                icon: '0',
                link: '/efetuarpagamento'
            }
        ]
    },
    {
        title: "Utilitários",
        icon: <HelpIcon/>,
        link: "/utilitarios",
        subMenu: [
            {
                title: "Manuais e Códigos",
                icon: '0',
                link: '/manuaisecodigos'
            },
            {
                title: "Contatos Úteis",
                icon: '0',
                link: '/contatouteis'
            }
        ]
    }
]

