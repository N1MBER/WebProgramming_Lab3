package main;
import javax.persistence.*;

@Entity
@Table

public class Point {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;
    @Column(nullable = false)
    private Double x;
    @Column(nullable = false)
    private Double y;
    @Column(nullable = false)
    private Double r;
    @Column(nullable = false)
    private Boolean inArea;

    public Point(Double x, Double y,Double r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.inArea = isInArea();
    }

    public Point(Double x, Double y,Double r, Boolean inArea){
        this.x = x;
        this.y = y;
        this.r = r;
        this.inArea = inArea;
    }

    public Point(){}

    public Boolean getInArea() {
        return inArea;
    }

    public Double getR() {
        return r;
    }

    public Double getX() {
        return x;
    }

    public Double getY() {
        return y;
    }

    public void setInArea(Boolean inArea) {
        this.inArea = inArea;
    }

    public void setR(Double r) {
        this.r = r;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public boolean isInArea(){
        if(x>0 && y>0){
            return false;
        }
        if (x>=0 && y<=0){
            if (-y/2 <= (x+r))
                return true;
            else
                return false;
        }
        if (x<0 && y<=0){
            if (Math.sqrt((x*x) + (y*y)) <=r/2){
                return true;
            }
            else
                return false;
        }
        if (x<=0 && y>=0) {
            if (-x<=r && y<=r/2 ){
                return true;
            }
            else
                return false;
        }
        return false;
    }
}
