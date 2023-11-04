import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';

interface SidebarData {
    label: string
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string }
    link: string
}

export const sidebarData: SidebarData[] = [
    {
        label: 'Página principal',
        icon: HomeIcon,
        link: '/home'
    },
    {
        label: 'Elemento 1',
        icon: MailIcon,
        link: '/test-1'
    },
    {
        label: 'Elemento 2',
        icon: MailIcon,
        link: '/test-2'
    },
]