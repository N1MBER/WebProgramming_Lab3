package main;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import javax.faces.context.FacesContext;
import javax.servlet.ServletContext;
import java.io.File;

import org.hibernate.cfg.Configuration;

public class HibernateManager {
    private static final SessionFactory sessionFactory;
    static {
        try{
            Class.forName("org.postgresql.Driver");
        }catch (ClassNotFoundException e){
            e.getMessage();
        }
        try {
            ServletContext ctx = (ServletContext) FacesContext
                    .getCurrentInstance().getExternalContext().getContext();
            String deploymentDirectoryPath = ctx.getRealPath("/");
            sessionFactory = new Configuration()
                    .configure(new File("/Users/n1mber/Lab3/out/artifacts/Lab3_war_exploded.war/WEB-INF/hibernate.cfg.xml"))
                    .buildSessionFactory();
        } catch (Throwable ex) {
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }

    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }

}
