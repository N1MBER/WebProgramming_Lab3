package main;
import org.hibernate.Session;

import javax.faces.bean.SessionScoped;

import javax.faces.bean.ManagedBean;
import java.util.ArrayList;
import java.util.List;

@ManagedBean(name = "modelBean",eager = true)
@SessionScoped

public class ModelBean {

    private String X;
    private String Y;
    private String R;
    private List<Point> list = new ArrayList<>();


    public String getR() {
        return R;
    }

    public String getX() {
        return X;
    }

    public String getY() {
        return Y;
    }

    public void setY(String y) {
        Y = y;
    }

    public void setX(String x) {
        X = x;
    }

    public void setR(String r) {
        R = r;
    }

    public void addToList() {
        System.out.println(X + ' ' + Y + ' ' + R+"\n\n");
        try (Session session = HibernateManager.getSessionFactory().openSession()) {
            session.beginTransaction();
            Point point = new Point(Double.parseDouble(X.replace(',', '.').trim()),
                    Double.parseDouble(Y.replace(',', '.').trim()),
                    Double.parseDouble(R.replace(',', '.').trim()));
            session.save(point);
            session.getTransaction().commit();
        } catch (Exception e) {
            System.out.println("Parser error");
        }
    }

    public List<Point> getList() {
        List<Point> list = null;
        try(Session session = HibernateManager.getSessionFactory().openSession()){
            session.beginTransaction();
            list =  (List<Point>)session.createQuery("from Point").list();
        } catch (Exception e){
            e.printStackTrace();
        }
        return list;
    }
}
