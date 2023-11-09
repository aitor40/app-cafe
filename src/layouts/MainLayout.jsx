import { AppSuperiorBar } from '../components';

export const MainLayout = ({ children }) => {

    // Preparamos variables estáticas
    const drawerWidth = 300;

    return (
        <>
            <AppSuperiorBar drawerWidth={ drawerWidth } />
            <h1>Main Layout</h1>
            { children }
        </>
    )
}
